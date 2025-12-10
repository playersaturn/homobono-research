-- Create a table for profiles
create table profiles (
  id uuid references auth.users not null primary key,
  email text,
  full_name text,
  avatar_url text,
  is_subscribed boolean default false,
  stripe_customer_id text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Internal tips/posts table
create table posts (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  content text not null,
  is_premium boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  author_id uuid references auth.users
);

-- Set up Row Level Security (RLS)
alter table profiles enable row level security;
alter table posts enable row level security;

create policy "Public profiles are viewable by everyone." on profiles
  for select using (true);

create policy "Users can insert their own profile." on profiles
  for insert with check (auth.uid() = id);

create policy "Users can update own profile." on profiles
  for update using (auth.uid() = id);

-- Posts policies
create policy "Everyone can view free posts" on posts
  for select using (is_premium = false);

create policy "Subscribers can view premium posts" on posts
  for select using (
    is_premium = true and 
    exists (
      select 1 from profiles 
      where id = auth.uid() and is_subscribed = true
    )
  );

-- Function to handle new user signup
create or replace function public.handle_new_user() 
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;

-- Trigger to call the function on signup
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

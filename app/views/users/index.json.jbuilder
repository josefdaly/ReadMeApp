json.array!(@users) do |user|
  json.partial! 'users/user', {
    user: user,
    include_written_works: true
  }
end

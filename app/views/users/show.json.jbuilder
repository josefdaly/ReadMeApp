json.partial! 'users/user', {
  user: @user,
  include_library_books: true,
  include_written_works: true
}

json.extract! @user, :id, :email, :fname, :lname

json.library_books(@user.library_books) do |book|
  json.partial! 'api/books/book', book: book, include_author?: true
end

json.written_works(@user.written_works) do |book|
  json.partial! 'api/books/book', book: book, include_author?: false
end

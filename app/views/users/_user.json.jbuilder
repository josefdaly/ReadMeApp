json.extract! @user, :id, :email, :fname, :lname

include_library_books ||= false
if include_library_books
  json.library_books(@user.library_books) do |book|
    json.partial! 'api/books/book', book: book, include_author: true
  end
end

include_written_works ||= false
if include_written_works
  json.written_works(@user.written_works) do |book|
    json.partial! 'api/books/book', book: book, include_author: false
  end
end

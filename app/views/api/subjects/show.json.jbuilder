json.extract! @subject, :id, :title

json.books(@subject.books) do |book|
  json.partial! 'api/books/book', book: book, include_author?: true, include_subject?: false
end

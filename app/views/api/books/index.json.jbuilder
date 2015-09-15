
json.array!(@books) do |book|
  json.partial! 'api/books/book', {
    book: book,
    include_author: true,
    include_reviews: true
  }
end

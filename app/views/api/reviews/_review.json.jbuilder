json.extract! review, :id, :author_id, :book_id, :quantitative, :qualitative

if include_author
  json.author json.partial! 'users/user', user: review.author
end

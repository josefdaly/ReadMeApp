json.extract! review, :id, :author_id, :book_id, :quantitative, :qualitative, :title

include_author ||= false
if include_author
  json.author_fname review.author.fname
  json.author_lname review.author.lname
end

json.extract! book, :id, :title, :description, :created_at, :doc_url, :author_id, :cover_url
if current_user
  if book.in_library_of?(current_user)
    json.library_item do
      json.id current_user.library_items.find_by(book_id: book.id).id
    end
  end
end
include_author ||= false
if include_author
  json.author_fname book.author.fname
  json.author_lname book.author.lname
end
include_subjects ||= false
if include_subjects
  json.subjects book.subjects.each do |subject|
    json.subject_title subject.title
    json.subject_id subject.id
  end
end
include_reviews ||= false
if include_reviews
  json.reviews book.reviews.each do |review|
    json.partial! 'api/reviews/review', review: review, include_author: true
  end
end

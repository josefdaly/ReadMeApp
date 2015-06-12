json.extract! book, :id, :title, :description, :created_at, :doc_url
include_author ||= false
if include_author
  json.author_fname book.author.fname
  json.author_lname book.author.lname
end
include_subjects ||= false
if include_subjects
  json.subjects(book.subjects).each do |subject|
    json.subject subject.title
  end
end

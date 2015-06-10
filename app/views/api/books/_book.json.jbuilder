json.extract! book, :id, :title, :release_date,
if include_author?
  json.author_fname book.author.fname
  json.author_lname book.author.lname
end
if include_subjects?
  json.subjects(book.subjects).each do |subject|
    json.subject subject.title
  end
end

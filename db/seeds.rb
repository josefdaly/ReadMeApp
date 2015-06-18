# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# 
# 10.times do |i|
#   User.create(
#     email: "#{i}@gmail.com",
#     fname: "#{i}",
#     lname: "#{i+15}",
#     session_token: User.generate_session_token,
#     password_digest: User.generate_session_token,
#     description: 'I am a writer. I like Steven King and the gospel of John.'
#   )
# end
#
# User.create(
#   email: "admin",
#   fname: 'Joseph',
#   lname: 'Daly',
#   session_token: User.generate_session_token,
#   password_digest: BCrypt::Password.create('123456')
# )
#
# 10.times do |i|
#   5.times do |j|
#     Book.create(
#       title: "#{i+j}#{i*j} book",
#       author_id: i+1,
#       doc_url: 'http://lorempixel.com/output/nature-h-g-353-480-7.jpg',
#       description: 'This book is about a boy and his dog.'
#     )
#   end
# end
#
# 5.times do |i|
#   10.times do |j|
#     LibraryItem.create(book_id: (i+1)*(j+1), owner_id: j+1)
#   end
# end

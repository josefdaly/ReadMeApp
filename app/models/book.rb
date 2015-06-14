# == Schema Information
#
# Table name: books
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  author_id   :integer          not null
#  doc_url     :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :text
#

class Book < ActiveRecord::Base
  validates :title, :author_id, :doc_url, presence: true

  belongs_to(
    :author,
    class_name: 'User',
    foreign_key: :author_id
  )
  has_many(
    :book_subjects,
    class_name: 'BookSubject'
  )
  has_many(
    :subjects,
    through: :book_subjects,
    source: :subject
  )
  has_many(
    :reviews,
    class_name: 'Review'
  )
end

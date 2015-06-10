# == Schema Information
#
# Table name: subjects
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Subject < ActiveRecord::Base
  validates :title, presence: true
  has_many(
    :book_subjects,
    class_name: 'BookSubject'
  )
  has_many(
    :books,
    through: :book_subjects,
    source: :book
  )
end

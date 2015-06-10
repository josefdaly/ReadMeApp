# == Schema Information
#
# Table name: book_subjects
#
#  id         :integer          not null, primary key
#  book_id    :integer          not null
#  subject_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class BookSubject < ActiveRecord::Base
  validates :book_id, :subject_id, presence: true
  belongs_to :book
  belongs_to :subject
end

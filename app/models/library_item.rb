# == Schema Information
#
# Table name: library_items
#
#  id         :integer          not null, primary key
#  book_id    :integer          not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class LibraryItem < ActiveRecord::Base
  validates :book_id, :owner_id, presence: true
  belongs_to :book
  belongs_to(
    :owner,
    class_name: 'User',
    foreign_key: :owner_id
  )
end

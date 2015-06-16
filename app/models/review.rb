# == Schema Information
#
# Table name: reviews
#
#  id           :integer          not null, primary key
#  author_id    :integer          not null
#  book_id      :integer          not null
#  quantitative :integer          not null
#  qualitative  :text
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  title        :string
#

class Review < ActiveRecord::Base
  validates :author_id, :book_id, :quantitative, presence: true
  validates :author_id, uniqueness: { scope: :book_id }
  belongs_to(
    :author,
    class_name: 'User',
    foreign_key: :author_id
  )
  belongs_to :book
end

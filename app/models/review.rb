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

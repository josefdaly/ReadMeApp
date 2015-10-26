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
#  cover_url   :string
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
  has_many(
    :library_items,
    class_name: 'LibraryItem',
    foreign_key: :book_id
  )

  def average_quantitative_rating
    reviews_arr = self.reviews.to_a.map do |review|
      review.quantitative
    end
    if reviews_arr.length > 0
      reviews_arr.inject(:+).to_f / reviews_arr.length.to_f
    else
      0
    end
  end

  def in_library_of?(user)
    condition = false
    self.library_items.each do |item|
      if item.owner_id == user.id && item.book_id == self.id
        condition = true
      end
    end

    condition
  end
end

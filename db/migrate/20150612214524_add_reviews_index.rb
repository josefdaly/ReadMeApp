class AddReviewsIndex < ActiveRecord::Migration
  def change
    add_index :reviews, [:author_id, :book_id], unique: true
  end
end

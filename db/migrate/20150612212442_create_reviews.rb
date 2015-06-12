class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :author_id, null: false
      t.integer :book_id, null: false
      t.integer :quantitative, null: false
      t.text :qualitative

      t.timestamps null: false
    end
    add_index :reviews, :author_id
    add_index :reviews, :book_id
  end
end

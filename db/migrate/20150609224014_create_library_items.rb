class CreateLibraryItems < ActiveRecord::Migration
  def change
    create_table :library_items do |t|
      t.integer :book_id, null: false
      t.integer :owner_id, null: false

      t.timestamps null: false
    end
    add_index :library_items, :book_id
    add_index :library_items, :owner_id
  end
end

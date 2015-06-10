class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.date :release_date, null: false
      t.integer :author_id, null: false
      t.string :doc_url, null: false

      t.timestamps null: false
    end
    add_index :books, :author_id
  end
end

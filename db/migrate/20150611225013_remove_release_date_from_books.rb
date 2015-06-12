class RemoveReleaseDateFromBooks < ActiveRecord::Migration
  def change
    remove_column :books, :release_date
  end
end

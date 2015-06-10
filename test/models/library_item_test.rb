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

require 'test_helper'

class LibraryItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

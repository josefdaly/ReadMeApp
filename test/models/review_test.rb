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

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

# == Schema Information
#
# Table name: book_subjects
#
#  id         :integer          not null, primary key
#  book_id    :integer          not null
#  subject_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class BookSubjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

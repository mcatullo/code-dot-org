require 'test_helper'

class ScriptConstantsTest < ActiveSupport::TestCase
  def test_csf_next_course_recommendation
    {
      "course1" => "course2",
      "course2" => "course3",
      "course3" => "course4",
      "accelerated" => "course4",
      "course4" => "applab-intro",

      "coursea-2019" => "courseb-2019",
      "courseb-2019" => "coursec-2019",
      "coursec-2019" => "coursed-2019",
      "coursed-2019" => "coursee-2019",
      "coursee-2019" => "coursef-2019",
      "pre-express-2019" => "coursec-2019",
      "coursef-2019" => "applab-intro",
      "express-2019" => "applab-intro",

      "coursea-2020" => "courseb-2020",
      "courseb-2020" => "coursec-2020",
      "coursec-2020" => "coursed-2020",
      "coursed-2020" => "coursee-2020",
      "coursee-2020" => "coursef-2020",
      "pre-express-2020" => "coursec-2020",
      "coursef-2020" => "applab-intro",
      "express-2020" => "applab-intro",
    }.each do |course_name, expected|
      assert_equal expected, ScriptConstants.csf_next_course_recommendation(course_name), "course: #{course_name}"
    end

    assert_nil ScriptConstants.csf_next_course_recommendation("something-unknown")
  end

  describe 'ScriptConstants::i18n' do
    it 'finds course1 in i18n' do
      assert ScriptConstants.i18n?('course1')
    end
  end
end

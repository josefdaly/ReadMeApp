# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150616225044) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "book_subjects", force: :cascade do |t|
    t.integer  "book_id",    null: false
    t.integer  "subject_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "book_subjects", ["book_id"], name: "index_book_subjects_on_book_id", using: :btree
  add_index "book_subjects", ["subject_id"], name: "index_book_subjects_on_subject_id", using: :btree

  create_table "books", force: :cascade do |t|
    t.string   "title",       null: false
    t.integer  "author_id",   null: false
    t.string   "doc_url",     null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.text     "description"
    t.string   "cover_url"
  end

  add_index "books", ["author_id"], name: "index_books_on_author_id", using: :btree

  create_table "library_items", force: :cascade do |t|
    t.integer  "book_id",    null: false
    t.integer  "owner_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "library_items", ["book_id"], name: "index_library_items_on_book_id", using: :btree
  add_index "library_items", ["owner_id"], name: "index_library_items_on_owner_id", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.integer  "author_id",    null: false
    t.integer  "book_id",      null: false
    t.integer  "quantitative", null: false
    t.text     "qualitative"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.string   "title"
  end

  add_index "reviews", ["author_id", "book_id"], name: "index_reviews_on_author_id_and_book_id", unique: true, using: :btree
  add_index "reviews", ["author_id"], name: "index_reviews_on_author_id", using: :btree
  add_index "reviews", ["book_id"], name: "index_reviews_on_book_id", using: :btree

  create_table "subjects", force: :cascade do |t|
    t.string   "title",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "session_token",   null: false
    t.string   "password_digest", null: false
    t.string   "fname",           null: false
    t.string   "lname",           null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.text     "description"
  end

end

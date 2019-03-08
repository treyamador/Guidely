class CreateHighlights < ActiveRecord::Migration[5.2]
  def change
    create_table :highlights do |t|
      t.string :color
      t.integer :start
      t.integer :end
      t.references :page, foreign_key: true

      t.timestamps
    end
  end
end

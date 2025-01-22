import {
  date,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core'

export const STATUS_ENUM = pgEnum('status', ['PENDING', 'APPROVED', 'REJECTED'])
export const ROLE_ENUM = pgEnum('role', ['USER', 'ADMIN'])
export const BORROW_STATUS_ENUM = pgEnum('borrow_status', [
  'OVERDUE',
  'BORROWED',
  'RETURNED',
])

export const usersTable = pgTable('users', {
  id: uuid().primaryKey().defaultRandom().unique().notNull(),
  fullName: varchar('full_name', { length: 255 }).notNull(),
  email: varchar({ length: 100 }).notNull().unique(),
  password: varchar({ length: 100 }).notNull(),
  universityId: integer('university_id').notNull(),
  universityCard: text('university_card').notNull(),
  status: STATUS_ENUM('status').default('PENDING'),
  role: ROLE_ENUM('role').default('USER'),
  lastActivityDate: date('last_activity_date').notNull().defaultNow(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
})

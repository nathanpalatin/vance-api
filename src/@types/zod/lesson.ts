import { z } from 'zod'

export const createLessonSchemaBody = z.object({
	title: z.string(),
	description: z.string(),
	moduleId: z.string(),
	courseId: z.string(),
	video: z.string().optional()
})
export const getParamsLessonSchema = z.object({
	lessonId: z.string()
})

export const getParamsOneLessonSchema = z.object({
	courseSlug: z.string(),
	moduleSlug: z.string(),
	slug: z.string()
})

export const updateProgressLessonSchema = z.object({
	lessonId: z.string(),
	moduleId: z.string(),
	courseId: z.string()
})

export const createCommentLessonSchemaBody = z.object({
	content: z.string(),
	lessonId: z.string(),
	answer: z.boolean().default(false)
})

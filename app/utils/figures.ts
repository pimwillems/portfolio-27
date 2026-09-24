import type { FigureData, Project } from '~/data/issue'

/** Every spread layout places exactly three figures, in data order. */
export function spreadFigures(project: Project): [FigureData, FigureData, FigureData] {
  const [a, b, c] = project.figures
  if (!a || !b || !c) throw new Error(`Project ${project.id} needs three figures`)
  return [a, b, c]
}

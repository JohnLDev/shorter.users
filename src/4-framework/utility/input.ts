import { AppError } from '@shared/utils/error'
import { validateSync, type ValidationError } from 'class-validator'

interface FormatedError {
  field: string
  message: string[]
}

export class Input {
  constructor(props: any) {
    Object.assign(this, props)
    this.validate()
  }

  private validate(): void {
    const errors = validateSync(this)
    if (errors.length > 0) {
      throw new AppError({
        code: 'VALIDATION_ERROR',
        message: 'Validation error',
        details: this.formatErrors(errors),
        stack: 'Input.validate'
      })
    }
  }

  private formatErrors(errors: ValidationError[]): FormatedError[] {
    return errors.map((error: ValidationError) => {
      return {
        field: error.property,
        message: Object.values(error.constraints ?? {})
      }
    })
  }
}

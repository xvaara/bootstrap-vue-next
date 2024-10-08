import type {InjectionKey} from 'vue'

export const appInfoKey: InjectionKey<{
  githubUrl: string
  githubPackageDirectory: string
  githubComponentsDirectory: string
  githubComposablesDirectory: string
  githubDirectivesDirectory: string
  discordUrl: string
  opencollectiveUrl: string
}> = Symbol('app-info')

import type { Environment } from 'vitest'

export default <Environment>{
  name: 'prisma',
  transformMode: 'ssr',
  // optional - only if you support "experimental-vm" pool
  async setupVM() {
    const vm = await import('node:vm')
    const context = vm.createContext()
    return {
      getVmContext() {
        return context
      },
      teardown() {
        console.log('Teardown')
      },
    }
  },
  setup() {
    console.log('Setup')
    return {
      teardown() {
        console.log('Teardown')
      },
    }
  },
}

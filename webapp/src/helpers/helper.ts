import { IComponentInfo } from '../types/Types'

const getComponentInfoByPath = (
  componentInfoList: IComponentInfo[],
  path: string
): IComponentInfo =>
  componentInfoList.filter((c) => c.Path === path)[0] ||
  componentInfoList.filter((c) => c.Default === true)[0]

export { getComponentInfoByPath }

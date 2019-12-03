import { withStore } from 'services/store'
import { ThirdLoginVO } from 'api/platform-user'

export const withThirdLoginData = withStore('thirdLoginData', {} as ThirdLoginVO)
export const useThirdLoginData = withThirdLoginData.getShareState

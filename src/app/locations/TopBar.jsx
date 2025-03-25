import { useEffect, useMemo, useState } from 'react'
import { useClient } from '../hooks/useClient'
import { DEFAULT_THEME, ThemeProvider } from '@zendeskgarden/react-theming'

const TopBar = () => {
  const client = useClient()

  useEffect(() => {
    client.invoke('resize', { width: '100%', height: '450px' })
  }, [client])

  const [isDarkMode, setIsDarkMode] = useState(false)

  const theme = useMemo(() => ({
    colors: {
      background: isDarkMode ? '#39434b' : '#fff',
      foreground: isDarkMode ? '#fff' : '#39434b',
    },
  }), [isDarkMode]);

  useEffect(() => {
    client.get('theme').then((data) => {
      setIsDarkMode(data.theme.base === 'dark')
    })
  }, [client, isDarkMode])

  useEffect(() => {
    client.on('theme.changed', function(data){
      console.log("** APP app.theme event", data.theme.base)
      setIsDarkMode(data.theme.base === 'dark')
    })
  }, [client])


  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: '100px', background: theme.colors.background, color: theme.colors.foreground }}>
        <div>hi</div> 
      </div>
    </ThemeProvider>
  )
}

export default TopBar

import '../UIcontainer/StylesContainer.css'

type ReactNode = {
  children: React.ReactNode
}

export const Container = ({ children }: ReactNode) => {
  return <div className="ui-container">{children}</div>
}

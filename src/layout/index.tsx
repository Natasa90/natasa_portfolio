const LayoutStyle = {
    fontSize: '22px',
    display: 'flex',
    flexFlow: 'column wrap',
    marginLeft: '8rem',
    paddingBottom: '2rem'
};

export const Layout = ({children}: any) => {
    return (
        <main style={LayoutStyle}>
            {children}
        </main>
    )
};
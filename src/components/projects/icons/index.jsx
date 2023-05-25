import { Button, DivIcons } from "./styles"

export const Icons = ({ children, hrefDeploy, hrefRepo }) => {
    return (
        <DivIcons>
            <a href={hrefRepo} target="_blank" rel="noreferrer">
                <Button>
                    Repositório
                </Button>
            </a>
            <div>
                {children}
            </div>
            <a href={hrefDeploy} target="_blank" rel="noreferrer">
                <Button>
                    Deploy
                </Button>
            </a>
        </DivIcons>

    )
}
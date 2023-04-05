import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {

    return (
        <div style={{ height: '100vh' }}>
         <PrettyChatWindow
         projectId='2c86fc44-1e97-4b16-8862-5eb458cae4fb'
         username={props.user.username}
         secret={props.user.secret}
         style={{ height: '100%'}}
         />
        </div>
    )
}

export default ChatsPage
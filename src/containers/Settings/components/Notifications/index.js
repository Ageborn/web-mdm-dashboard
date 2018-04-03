import React, { Component } from 'react'
import ReactWinJS from 'react-winjs'
import ContentPane from '../../../../components/ContentPane'
import { I18n } from 'react-i18nify'

class Notifications extends Component {

    constructor (props) {
        super(props)

        const notificationType = (localStorage.getItem('notificationType') && Notification.permission === 'granted')
         ? localStorage.getItem('notificationType')
         : 'Toast'

        const showNotifications = localStorage.getItem('showNotifications')
         ? (localStorage.getItem('showNotifications') === 'true')
         : true

        this.state = {
            notificationType,
            showNotifications
        }
    }

    changeNotificationType = (e) => {
        const newNotificationType = e.target.value
        if (Notification) {
            Notification.requestPermission()
                .then((permission) => {
                    if(permission === "granted") {
                        localStorage.setItem('notificationType', newNotificationType)
                        this.setState({
                            notificationType: newNotificationType
                        })
                    }
                })
        }
    } 

    changeShowNotifications = () => {
        localStorage.setItem('showNotifications', !this.state.showNotifications)
        this.setState({showNotifications: !this.state.showNotifications})
    }

    render () {
        return (
            <ContentPane>
                <h2 style={{marginBottom: '20px'}}>
                    {I18n.t('settings.notifications.title')}
                </h2>
                <div className="listElement">
                    <div className="message">
                        {I18n.t('settings.notifications.show')}
                        <div className="detail">
                            {I18n.t('settings.notifications.show_deatil')}
                        </div>
                    </div>
                    <div className="controller">
                        <ReactWinJS.ToggleSwitch 
                            className="content-text-primary"
                            checked={this.state.showNotifications}
                            onChange={this.changeShowNotifications}
                        />
                    </div>
                </div>

                <div className="listElement">
                    <div className="message">
                        {I18n.t('settings.notifications.type')}
                        <div className="detail">
                            {I18n.t('settings.notifications.type_detail')}
                        </div>
                    </div>
                    <div className="controller" style={{ paddingTop: 10 }}>
                        <select 
                        className="win-dropdown" 
                        name='notificationType' 
                        value={this.state.notificationType}
                        onChange={this.changeNotificationType}
                        >
                            <option>
                                {I18n.t('settings.notifications.toast')}
                            </option>
                            <option>
                                {I18n.t('settings.notifications.native')}
                            </option>
                        </select>
                    </div>
                </div>

            </ContentPane>
        )
    }
}

export default Notifications
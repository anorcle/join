const submit = async () => {

    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const email = document.getElementById("email").value
    const country = document.getElementById("country").value
    const state = document.getElementById("state").value
    const city = document.getElementById("city").value

    //... TO do for social profile
    const socialProfiles = [...document.querySelectorAll(".social>.card_row")].map(cardRow => {
        return {
            "name": cardRow.firstElementChild.value,
            "value": `[${cardRow.lastElementChild.value}](${cardRow.lastElementChild.value})`
        }
    }).filter(profile => profile.name !== "" && profile.value !== "[]()")

    const departments = document.getElementById("department").value
    const position = document.getElementById("position").value

    const passionAndSkills = document.getElementById("passion-and-skills").value
    const whyAnorcle = document.getElementById("why-anorcle").value
    const investmentTime = document.getElementById("investment-time").value
    const schedule = document.getElementById("schedule").value

    data = {
        "@type": "MessageCard",
        "@context": "http://schema.org/extensions",
        "themeColor": "0076D7",
        "summary": `${firstName} ${lastName} applied for Joining Anorcle`,
        "sections": [{
            "activityTitle": `${firstName} ${lastName} is interested in joining Anorcle`,
            "activitySubtitle": "Anorcle Accounts",
            "activityImage": "https://avatars1.githubusercontent.com/u/61949606?s=200&v=4",
            "facts": [{
                "name": "Full Name",
                "value": `${firstName} ${lastName}`
            }, {
                "name": "Departments",
                "value": departments
            }, {
                "name": "Positions",
                "value": position
            }, {
                "name": "Address",
                "value": `${city}, ${state}, ${country}`
            }, {
                "name": "Email",
                "value": email
            }, {
                "name": "Passion And Skills",
                "value": passionAndSkills
            }, {
                "name": "why Anorcle?",
                "value": whyAnorcle
            }, {
                "name": "Investment Time",
                "value": investmentTime
            }, {
                "name": "My Schedule",
                "value": schedule
            }],
            "markdown": true
        }, {
            "activityTitle": "Connectivity and Social Media",
            "facts": socialProfiles,
            "markdown": true
        }],
        "potentialAction": [{
            "@type": "ActionCard",
            "name": "Ask Queries",
            "inputs": [{
                "@type": "TextInput",
                "id": "queries",
                "isMultiline": true,
                "title": "Type Your queries here.."
            }],
            "actions": [{
                "@type": "HttpPOST",
                "name": "Send Query Mail",
                "target": "http://..."
            }]
        }, {
            "@type": "ActionCard",
            "name": "Application Status",
            "inputs": [{
                "@type": "MultichoiceInput",
                "id": "list",
                "title": "Update Status",
                "isMultiSelect": "false",
                "choices": [{
                    "display": "Under Review",
                    "value": "1"
                }, {
                    "display": "Approve & Close",
                    "value": "2"
                }, {
                    "display": "Disapprove & Close",
                    "value": "3",
                }]
            }],
            "actions": [{
                "@type": "HttpPOST",
                "name": "Send Email Update",
                "target": "http://..."
            }]
        }, {
            "@type": "ActionCard",
            "name": "Send Offer",
            "inputs": [{
                "@type": "MultichoiceInput",
                "id": "list",
                "title": "Selected Positions to offer",
                "isMultiSelect": "true",
                "choices": [{
                    "display": "HR Manager",
                    "value": "1"
                }, {
                    "display": "Frontend Developer",
                    "value": "2"
                }, {
                    "display": "Backend Developer",
                    "value": "3",
                }]
            }],
            "actions": [{
                "@type": "HttpPOST",
                "name": "Send Offer Email",
                "target": "http://..."
            }]
        }]
    }
    try {
        const response = await fetch('https://was5thl3zg.execute-api.ap-south-1.amazonaws.com/default/joining-application', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        console.log(response)
    } catch (error) {
        console.error(error)
    }
}


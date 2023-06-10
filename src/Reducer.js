export const reduceItems = (items, action) => {
    switch (action.type) {
        case 'CREATE' : {
            return [action.item, ...items]
        }

        case 'UPDATE' : {
            return items.map(
                it => {
                    if (it.id === action.targetId) {
                        return {
                            ...it,
                            isDone: !it.isDone
                        }
                    } else {
                        return it
                    }
                }
            )
        }

        case 'DELETE' : {
            return items.filter(item => item.id !== action.targetId)
        }

        default:
            return items
    }
}
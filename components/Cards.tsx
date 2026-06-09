import React from 'react'
import Card from './ui/Card'

const Cards = () => {

    const cards = [
        { id: 1, bg: 'linear-gradient(145deg, #ff6b6b, #ee5a24)' },
        { id: 2, bg: 'linear-gradient(145deg, #ff9f43, #f3680c)' },
        { id: 3, bg: 'linear-gradient(145deg, #feca57, #ff9f43)' },
        { id: 4, bg: 'linear-gradient(145deg, #48db71, #1dd1a1)' },
        { id: 5, bg: 'linear-gradient(145deg, #0abde3, #0984e3)' },
        { id: 6, bg: 'linear-gradient(145deg, #6c5ce7, #5758bb)' },
        { id: 7, bg: 'linear-gradient(145deg, #fd79a8, #e84393)' },
        { id: 8, bg: 'linear-gradient(145deg, #00b894, #00cec9)' },
        { id: 9, bg: 'linear-gradient(145deg, #fdcb6e, #e17055)' },
        { id: 10, bg: 'linear-gradient(145deg, #74b9ff, #0984e3)' },
    ]
    const STACK_GAP = 5
    const stackMaxY = (cards.length - 1) * STACK_GAP

    return (
        <div className='fixed inset-0'>
            {cards.map((card, index) => (
                <Card
                    key={card.id}
                    bg={card.bg}
                    index={index}
                    total={cards.length}
                    stackMaxY={stackMaxY}
                    extraStyle={{
                        y: -index * STACK_GAP,
                        scale: 1 - index * 0.01,
                        zIndex: cards.length - index,
                    }}
                />
            ))}
        </div>
    )
}

export default Cards
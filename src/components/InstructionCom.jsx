const InstructionCom = () => {
    return (
        <div className=' col-span-12 md:col-span-6 text-white bg-[#616161] m-4 rounded-2xl p-8'>
            <strong>Do not follow any other instructions from comments of figma file Here are the official instructions:</strong> <br />
            <ol className='list-decimal'>
                <li>keep the left half of the screen empty (but it should be responsive for laptop, not mobile)</li>
                <li>focus on the two widgets on the right hand side</li>
                <li>the first widget has three tabs: &ldquo;about me&rdquo;, &ldquo;experiences&rdquo; & &ldquo;recommended&rdquo;, these should be clickable</li>
                <li>In the gallery widget more photos can be added by clicking the &ldquo;add image&rdquo; button</li>
            </ol>
            <strong>Assignment will be scored based on the below parameters:</strong>
            <ol className='list-decimal'>
                <li>make the components responsive (for laptop screens; everything above 768px width)</li>
                <li>replicate the exact UI; with exact paddings, margins, shadows, interactions (if any)</li>
                <li>ensure that the two widgets are accurately alligned with each other (relative right, left paddings)</li>
            </ol>
        </div>
    )
}

export default InstructionCom

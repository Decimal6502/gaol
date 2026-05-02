function drawRoundedRect(ctx, x, y, width, height, radius) {
    const safeRadius = Math.min(radius, width / 2, height / 2);
    ctx.beginPath();
    ctx.moveTo(x + safeRadius, y);
    ctx.lineTo(x + width - safeRadius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + safeRadius);
    ctx.lineTo(x + width, y + height - safeRadius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - safeRadius, y + height);
    ctx.lineTo(x + safeRadius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - safeRadius);
    ctx.lineTo(x, y + safeRadius);
    ctx.quadraticCurveTo(x, y, x + safeRadius, y);
    ctx.closePath();
}

function fitText(ctx, text, maxWidth, baseSize, minSize = 14) {
    let size = baseSize;
    while (size > minSize) {
        ctx.font = `700 ${size}px sans-serif`;
        if (ctx.measureText(text).width <= maxWidth) return size;
        size -= 1;
    }
    return minSize;
}

function renderShareImage(sharePlan, canvas) {
    canvas.width = 1080;
    canvas.height = 620;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const margin = 28;
    const labelWidth = 112;
    const battleCount = sharePlan.fights.length;
    const colWidth = (width - margin * 2 - labelWidth) / battleCount;
    const headerHeight = 92;
    const rowHeight = 62;
    const tableTop = 108;
    const tableHeight = headerHeight + rowHeight * 6;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#f6f7fb';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#1f2933';
    ctx.font = '700 28px sans-serif';
    ctx.fillText(t('share.title'), margin, 46);
    ctx.font = '500 15px sans-serif';
    ctx.fillStyle = '#5b6472';
    ctx.fillText(t(sharePlan.nameMode === 'anonymous' ? 'share.namesAnonymous' : 'share.namesDisplay'), margin, 72);

    ctx.fillStyle = '#ffffff';
    drawRoundedRect(ctx, margin, tableTop, width - margin * 2, tableHeight, 8);
    ctx.fill();
    ctx.strokeStyle = '#cfd6e0';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.fillStyle = '#e9eef6';
    ctx.fillRect(margin, tableTop, width - margin * 2, headerHeight);

    ctx.strokeStyle = '#cfd6e0';
    for (let col = 0; col <= battleCount; col++) {
        const x = margin + labelWidth + colWidth * col;
        ctx.beginPath();
        ctx.moveTo(x, tableTop);
        ctx.lineTo(x, tableTop + tableHeight);
        ctx.stroke();
    }
    for (let row = 0; row <= 6; row++) {
        const y = tableTop + headerHeight + rowHeight * row;
        ctx.beginPath();
        ctx.moveTo(margin, y);
        ctx.lineTo(width - margin, y);
        ctx.stroke();
    }

    ctx.fillStyle = '#344054';
    ctx.font = '700 18px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('MEMBER', margin + labelWidth / 2, tableTop + headerHeight / 2);

    sharePlan.fights.forEach((fight, col) => {
        const centerX = margin + labelWidth + colWidth * col + colWidth / 2;
        ctx.fillStyle = '#1f2933';
        ctx.font = `700 ${fitText(ctx, fight.label, colWidth - 18, fight.isBonus ? 18 : 20, 12)}px sans-serif`;
        ctx.fillText(fight.label, centerX, tableTop + 22);
        ctx.font = `700 ${fitText(ctx, fight.bossName, colWidth - 18, 21, 13)}px sans-serif`;
        ctx.fillText(fight.bossName, centerX, tableTop + 48);
        ctx.fillStyle = '#687385';
        ctx.font = '500 14px sans-serif';
        ctx.fillText(fight.weak || '', centerX, tableTop + 72);
    });

    sharePlan.labels.forEach((item, row) => {
        const centerY = tableTop + headerHeight + rowHeight * row + rowHeight / 2;
        ctx.fillStyle = '#344054';
        ctx.font = `700 ${fitText(ctx, item.label, labelWidth - 18, 21, 13)}px sans-serif`;
        ctx.fillText(item.label, margin + labelWidth / 2, centerY);
    });

    sharePlan.fights.forEach((fight, col) => {
        fight.slots.forEach((slot, row) => {
            const centerX = margin + labelWidth + colWidth * col + colWidth / 2;
            const centerY = tableTop + headerHeight + rowHeight * row + rowHeight / 2;
            const value = slot.jobShort ? `${slot.jobShort}${slot.availability || ''}` : '-';
            ctx.fillStyle = slot.jobShort ? '#111827' : '#98a2b3';
            ctx.font = '700 26px sans-serif';
            ctx.fillText(value, centerX, centerY);
        });
    });

    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
}

function downloadPlanPng() {
    const canvas = document.getElementById('share-image-preview');
    if (!canvas) return;
    updateSharePreview();
    canvas.toBlob(blob => {
        if (!blob) {
            setShareFeedback(t('share.pngFailure'));
            return;
        }
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `gaol-plan-${new Date().toISOString().slice(0, 10)}.png`;
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
        setShareFeedback(t('share.pngSuccess'));
    }, 'image/png');
}


import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Hotstart Energy - Powering the Future';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 128,
                    background: 'linear-gradient(to bottom right, #1a1a1a, #000000)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'sans-serif',
                }}
            >
                <div style={{ fontWeight: 'bold', marginBottom: 20 }}>Hotstart Energy</div>
                <div style={{ fontSize: 48, opacity: 0.8 }}>Powering the Future</div>
            </div>
        ),
        {
            ...size,
        }
    );
}

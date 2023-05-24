import useReflare from 'reflare';

export default {
  async fetch(
    request: Request,
  ): Promise<Response> {
    const reflare = await useReflare();
    reflare.push({
      path: '/*',
      upstream: {
        protocol: 'https',
        domain: 'api.lsong.one',
		port: 8443,
      },
    });
    return reflare.handle(request);
  },
};
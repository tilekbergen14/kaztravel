@extends('layouts.admin')

@section('content')
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 8px">
        @foreach ($blogs as $item)
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src="{{ $item->image }}" alt="Sunset in the mountains">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{{ $item->title }}</div>
                    <p class="text-gray-700 text-base">
                        {{ $item->content }}
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <form action="{{ route('editblog', $item) }}">
                        <button href="{{ route('editblog', $item) }}"
                            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Редактировать</button>
                    </form>
                    <form action="{{ route('deleteblog', $item) }}" method="POST">
                        @csrf
                        @method("delete")
                        <button
                            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Удалять</button>
                    </form>
                </div>
            </div>
        @endforeach
    </div>
@endsection
